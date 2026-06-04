document.addEventListener('DOMContentLoaded', () => {
  const promptInput = document.getElementById('promptInput');
  const styleSelect = document.getElementById('styleSelect');
  const complexityRange = document.getElementById('complexityRange');
  const generateButton = document.getElementById('generateButton');
  const exportButton = document.getElementById('exportButton');
  const statusText = document.getElementById('statusText');
  const previewContainer = document.getElementById('previewContainer');

  let scene, camera, renderer, controls, modelGroup;

  function initThree() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf7fbff);

    const width = previewContainer.clientWidth || 640;
    const height = 480;
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 40, 60);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    previewContainer.innerHTML = '';
    previewContainer.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const amb = new THREE.HemisphereLight(0xffffff, 0x444444, 0.7);
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(50, 80, 50);
    scene.add(amb, dir);

    const floor = new THREE.Mesh(new THREE.CircleGeometry(80, 64), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -12;
    scene.add(floor);

    animate();
    window.addEventListener('resize', onWindowResize);
  }

  function onWindowResize() {
    const width = previewContainer.clientWidth || 640;
    const height = 480;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  function animate() {
    requestAnimationFrame(animate);
    if (controls) controls.update();
    if (renderer && camera) renderer.render(scene, camera);
  }

  function clearModel() {
    if (modelGroup) {
      scene.remove(modelGroup);
      modelGroup.traverse((c) => {
        if (c.geometry) c.geometry.dispose();
        if (c.material) c.material.dispose();
      });
      modelGroup = null;
    }
  }

  function parsePrompt(prompt) {
    const p = (prompt || '').toLowerCase();
    const params = { base: 'disc', feature: 'spikes', complexity: Number(complexityRange.value) || 5 };
    if (/sphere|orb|planet/.test(p)) params.base = 'sphere';
    if (/ring|halo/.test(p)) params.base = 'ring';
    if (/gear|cog|tech/.test(p)) params.feature = 'gear';
    if (/gem|crystal/.test(p)) params.feature = 'gem';
    if (/flower|petal/.test(p)) params.feature = 'petal';
    return params;
  }

  function buildModel(params) {
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: 0x8de3ff, metalness: 0.2, roughness: 0.4 });
    const accent = new THREE.MeshStandardMaterial({ color: 0xffd15e, metalness: 0.6, roughness: 0.2 });

    let base;
    if (params.base === 'sphere') base = new THREE.Mesh(new THREE.SphereGeometry(14, 48, 36), mat);
    else if (params.base === 'ring') { base = new THREE.Mesh(new THREE.TorusGeometry(12, 3, 16, 100), mat); base.rotation.x = Math.PI/2; }
    else base = new THREE.Mesh(new THREE.CylinderGeometry(16,16,4,64), mat);
    g.add(base);

    if (params.feature === 'gem') {
      const gem = new THREE.Mesh(new THREE.OctahedronGeometry(6), accent);
      gem.position.y = 6; g.add(gem);
    } else if (params.feature === 'gear') {
      const gear = new THREE.Mesh(new THREE.CylinderGeometry(8,8,4,32), accent);
      for (let i=0;i<12;i++){ const t = new THREE.BoxGeometry(2,4,6); const m = new THREE.Mesh(t, accent); m.position.set(Math.cos(i/12*Math.PI*2)*12,0,Math.sin(i/12*Math.PI*2)*12); m.rotation.y = i/12*Math.PI*2; g.add(m);} g.add(gear);
    } else {
      const count = Math.max(6, Math.min(16, params.complexity+4));
      for (let i=0;i<count;i++){ const cone = new THREE.Mesh(new THREE.ConeGeometry(3,10,16), accent); const r = 10 + (i%3); cone.position.set(Math.cos(i/count*Math.PI*2)*r,4,Math.sin(i/count*Math.PI*2)*r); cone.lookAt(0,0,0); g.add(cone);}    }

    return g;
  }

  function centerModel(obj) {
    const box = new THREE.Box3().setFromObject(obj);
    const center = box.getCenter(new THREE.Vector3());
    obj.position.x -= center.x; obj.position.z -= center.z; obj.position.y -= box.min.y - 1;
  }

  function generateModel() {
    const prompt = promptInput.value.trim();
    if (!prompt) { statusText.textContent = 'Please enter a prompt.'; return; }
    statusText.textContent = 'Generating model...';
    clearModel();
    const params = parsePrompt(prompt);
    modelGroup = buildModel(params);
    scene.add(modelGroup);
    centerModel(modelGroup);
    statusText.textContent = 'Model generated.';
    exportButton.disabled = false;
  }

  function exportSTL() {
    if (!modelGroup) { statusText.textContent = 'Generate a model first.'; return; }
    statusText.textContent = 'Exporting STL...';
    const exporter = new THREE.STLExporter();
    const data = exporter.parse(modelGroup);
    const blob = new Blob([data], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    const name = (promptInput.value.trim().toLowerCase().replace(/[^a-z0-9]+/g,'-') || 'stardance-model') + '.stl';
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    statusText.textContent = 'STL download should start.';
  }

  initThree();
  generateButton.addEventListener('click', generateModel);
  exportButton.addEventListener('click', exportSTL);
});
