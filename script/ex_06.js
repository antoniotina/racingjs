

window.onload = function() {

  var targetDiv = getBy("div");
  class Hero {
    constructor(name, role, intelligence, force) {
      this.name = name;
      this.role = role;
      this.intelligence = intelligence;
      this.force = force;
    }

    getName(object) {
      return this.name;
    }
    
    getRole(object) {
      return this.role;
    }
    
    getIntelligence(object) {
      return this.intelligence;
    }
    
    getForce(object) {
      return this.force;
    }

    toString() {
      console.log("test");
      var text = "Je suis " + this.getName() + " le " + this.getRole() + ", j'ai " + this.getIntelligence() + " points d'intelligence et " + this.getForce() + " points de force !<br>";
      targetDiv[2].innerHTML = targetDiv[2].innerHTML + text;

    }
  }

var mage = new Hero("Amadeus", "mage", 10, 3);
var guerrier = new Hero("Pontius", "guerrier", 3, 10);
mage.toString();
guerrier.toString();
}