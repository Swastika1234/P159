AFRAME.registerComponent("poster", {
  schema: {
    state: { type: "string", default: "places-list" },
    selectedCard: { type: "string", default: "#card1" },
  },
  init: function () {
      this.placesContainer = this.el;
      this.createPoster();
      
    },
  
    createPoster: function () {
      const thumbNailsRef = [
        {
          id: "superman",
          title: "Super Man",
          url:"./assets/superman.jpg",
        },
        {
          id: "spiderman",
          title: "Spider Man",
          url: "./assets/spiderman.webp",
        },
  
        {
          id: "captainAero",
          title: "Captain Aero",
          url: "./assets/captainAero.jpg",
        },
        {
          id: "outerSpace",
          title: "Outer Space",
          url: "./assets/outerSpace.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id);
        
        // Thumbnail Element
        const thumbNail = this.createThumbNail(item);
        borderEl.appendChild(thumbNail);
       
        // Title Text Element
        const titleEl = this.createTitleEl(position, item);
        borderEl.appendChild(titleEl);
  
        
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder: function(item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible",true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 20,
        height: 28,
      });
      entityEl.setAttribute("position", {x:0, y:5, z:0.1 });
      entityEl.setAttribute("material", { src: item.url });
        
      return entityEl;
    },
    createThumbNail: function (item) {
      const entityEl= document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive:"circle",
        radius:9,
      });
      entityEl.setAttribute("material", { src: item.url });
  
      return entityEl;
    },
    createTitleEl: function (position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "#e65100",
        value: item.title,
      });
      const elPosition = position;
      elPosition.y = -20;
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible", true);
      return entityEl;
    },
    
  });
  