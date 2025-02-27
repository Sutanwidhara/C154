AFRAME.registerComponent("flying-birds",{
    init:function(){
      for (var i = 1; i <= 20; i++){
        //It is a template literal, ${} we can manipulate the string to generate a unique id
        var id = `hurdle${i}`;
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
        var position = { x: posX, y: posY, z: posZ };
        this.flyingBirds(id, position);
      }},
  
    flyingBirds:(id, position)=>{ 
      var terrainEl = document.querySelector("#terrain");
      var birdEl = document.createElement("a-entity")
      birdEl.setAttribute("id",id);
      birdEl.setAttribute("position",position);
      birdEl.setAttribute("scale",{x:1000,y:1000,z:1000})
      birdEl.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf")
      birdEl.setAttribute("animation-mixer",{})
      terrainEl.appendChild(birdEl);
    }});  