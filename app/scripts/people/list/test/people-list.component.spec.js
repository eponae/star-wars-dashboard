describe('People List Component Tests', function () {
  beforeEach(angular.mock.module('starWarsDashboard'));

  beforeEach(inject(function ($componentController) {
    this.peopleListCtrl = $componentController('peopleList');
    this.peopleListCtrl.characters = {
      count: 87,
      next: 'https://swapi.co/api/people/?page=2',
      previous: null,
      data: [
        {
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
          gender: 'male'
        },
        {
          name: 'C-3PO',
          height: '167',
          mass: '75',
          hair_color: 'n/a',
          skin_color: 'gold',
          eye_color: 'yellow',
          birth_year: '112BBY'
        }
      ]
    };
  }));

  it(
    'Should calculate the last page index on changes',
    inject(function () {
      this.peopleListCtrl.$onChanges();
      expect(this.peopleListCtrl.lastPage).toEqual(9);
    })
  );
});
