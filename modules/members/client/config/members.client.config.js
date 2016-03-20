(function () {
  'use strict';

  angular
    .module('members')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Members',
      state: 'members',
      type: 'dropdown',
      roles: ['user']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'members', {
      title: 'List Members',
      state: 'members.list',
      roles: ['user']
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'members', {
      title: 'Create Member',
      state: 'members.create',
      roles: ['user']
    });
  }
})();
