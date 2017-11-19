import PeopleResource from '../people.resource';

describe('People Service Tests', function () {
  beforeEach(angular.mock.module('starWarsDashboard'));

  beforeEach(inject(function (peopleService, $httpBackend) {
    this.peopleService = peopleService;
    this.$httpBackend = $httpBackend;
    this.$httpBackend.whenGET(/.*\/people.*/).respond({
      count: 2,
      next: 'https://swapi.co/api/people/?page=2&search=l',
      previous: null,
      results: [
        {
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
          gender: 'male',
          url: 'https://swapi.co/api/people/1/',
          vehicles: []
        },
        {
          name: 'C-3PO',
          height: '167',
          mass: '75',
          hair_color: 'n/a',
          skin_color: 'gold',
          eye_color: 'yellow',
          birth_year: '112BBY',
          url: 'https://swapi.co/api/people/2/',
          vehicle: []
        }
      ]
    });
  }));

  afterEach(function () {
    this.$httpBackend.flush();
  });

  it(
    'Should return the list of characters on the first page',
    inject(function () {
      this.peopleService.getCharacters(1, 'l').then(function (result) {
        expect(angular.equals(result, {
          count: 2,
          next: 'https://swapi.co/api/people/?page=2&search=l',
          previous: null,
          data: [
            new PeopleResource({
              name: 'Luke Skywalker',
              height: '172',
              mass: '77',
              hair_color: 'blond',
              skin_color: 'fair',
              eye_color: 'blue',
              birth_year: '19BBY',
              gender: 'male'
            }),
            new PeopleResource({
              name: 'C-3PO',
              height: '167',
              mass: '75',
              hair_color: 'n/a',
              skin_color: 'gold',
              eye_color: 'yellow',
              birth_year: '112BBY',
              gender: undefined
            })
          ]
        })).toBe(true);
      });
    })
  );
});
