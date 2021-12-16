
(function () {
    'use strict';

    function exampleSection($scope) {

        var vm = this;

        vm.page = {
            title: 'Examples',
            description: 'UI Examples',
            navigation: [
                {
                    'name': 'Info',
                    'alias': 'default',
                    'icon': 'icon-sprout',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/info.html',
                    'active': true
                },
                {
                    'name': 'UmbBox',
                    'alias': 'umbbox',
                    'icon': 'icon-box',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/umbbox/umbbox.html'
                },
                {
                    'name': 'Layout',
                    'alias': 'layout',
                    'icon': 'icon-layout',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/layout/layout.html'
                },
                {
                    'name': 'Dialogs',
                    'alias': 'dialogs',
                    'icon': 'icon-browser-window',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/dialogs/dialogs.html',
                },
                {
                    'name': 'Icons',
                    'alias': 'icons',
                    'icon': 'icon-picture',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/icons/icons.html',
                },
                {
                    'name': 'Buttons',
                    'alias': 'buttons',
                    'icon': 'icon-checkbox-empty',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/buttons/buttons.html',
                },
                {
                    'name': 'Tabs',
                    'alias': 'tabs',
                    'icon': 'icon-tab',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/tabs/tabs.html',
                },
                {
                    'name': 'Editor Panels',
                    'alias': 'editorPanels',
                    'icon': 'icon-screensharing',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/editorPanels/panels.html',
                },
                {
                    'name': 'Alerts',
                    'alias': 'alerts',
                    'icon': 'icon-alert',
                    'view': Umbraco.Sys.ServerVariables.umbracoSettings.appPluginsPath + '/uiexamples/alerts/alerts.html',
                }
            ]
        }

    };

    angular.module('umbraco')
        .controller('exampleSectionController', exampleSection);
})();
