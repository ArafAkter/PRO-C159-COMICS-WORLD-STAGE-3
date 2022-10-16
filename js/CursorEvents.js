AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" }
  },
  init: function () {
    this.handleClickEvents();
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },
  handleClickEvents: function () {
    //Cursor 'click' Events
    this.el.addEventListener("click", evt => {
      const placesContainer = document.querySelector("#places-container");
      const { state } = placesContainer.getAttribute("tour");

      if (state === "places-list") {
        const id = this.el.getAttribute("id");
        const placesId = [
          "taj-mahal",
          "budapest",
          "new-york-city",
          "eiffel-tower"
        ];
        if (placesId.includes(id)) {
          placesContainer.setAttribute("tour", {
            state: "view",
            selectedCard: id
          });
        }
      }
    });
  },
  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "#D76B30",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    //Cursor 'mouseenter' Events
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    //Cursor 'mouseleave' Events
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
       text("comic")
        if (id == selectedItemId) {
     
        } text("comic")
      }
    });
  },

});
