(function () {
  'use strict';

  angular.module('uiTreeApp', ['ui.tree',  'ui.bootstrap'])
    .controller('treeController',TreeController);

    TreeController.$inject = ['$scope'];
    function TreeController($scope) {
        // Since Controller as Syntax is used $scope is not injected

      // count is used for generating unique id when adding new nodes
      $scope.count = 1;

      $scope.remove = function (scope) {
        scope.remove();
      };

      $scope.toggle = function (scope) {
        scope.toggle();
      };

      $scope.newSubItem = function (scope) {
        $scope.count = $scope.count + 1;
        var nodeData = scope.$modelValue;
        console.log(scope);
        nodeData.nodes.push({
          id: nodeData.id * 10 + $scope.count + nodeData.nodes.length,
          title: nodeData.title + '.' + (nodeData.nodes.length + 1),
          nodes: [],
          fieldA: ""
        });
      };

      $scope.data = [{
        'id': 1,
        'title': 'Item1',
        'nodes': []
      }, {
        'id': 2,
        'title': 'Item2',
        'nodes': []
      }, {
        'id': 3,
        'title': 'Item3',
        'nodes': []
      }, {
        'id': 4,
        'title': 'Item4',
        'nodes': []
      }];
    }

}());
