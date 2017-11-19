export default class PeopleResource {
  constructor(character) {
    this.name = character.name;
    this.height = character.height;
    this.mass = character.mass;
    this.hair_color = character.hair_color;
    this.skin_color = character.skin_color;
    this.eye_color = character.eye_color;
    this.birth_year = character.birth_year;
    this.gender = character.gender;
  }
}
