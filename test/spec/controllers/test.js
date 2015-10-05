/**
 * Created by kalin on 05-Oct-15.
 */
'use strict';

describe('Controller: TodoCtrl', function () {

    // load the controller's module
    beforeEach(module('yoApp'));

    var TodoCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        TodoCtrl = $controller('TodoCtrl', {
            $scope: scope
            // place here mocked dependencies
        });
    }));

    it('should have no items to start', function () {
        expect(scope.todos.length).toBe(0);
    });
});
