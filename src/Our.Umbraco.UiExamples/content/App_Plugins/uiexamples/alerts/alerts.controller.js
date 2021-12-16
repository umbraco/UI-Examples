(function () {
    'use strict';

    function alertsController($scope, exampleResource, notificationsService) {

        var vm = this;

        function init() {

            vm.loading = true;

            vm.linkAway = exampleResource.linkAway;

            vm.alerts = [
                { type: "form", class: "alert alert-form", headline: "Form", message: "A message, displaying on a white background with a dark border.", style: "info" },
                { type: "info", class: "alert alert-info", headline: "Info", message: "An informational message, displaying on a blue background.", style: "action" },
                { type: "success", class: "alert alert-success", headline: "Success", message: "A success message, displaying on a green background.", style: "success" },
                { type: "warning", class: "alert alert-warning", headline: "Warning", message: "A warning message, displaying on an orange background.", style: "warning" },
                { type: "error", class: "alert alert-error", headline: "Error", message: "An error message, displaying on a red background.", style: "danger" },
                { type: "", class: "well", headline: "Well", message: "An informational message, displaying inset on a gray background.", style: "info" }
            ];

            vm.snippetNotification = `// To display a success notification.
notificationsService.success("Document Published", "hooraaaay for you!");

// To display an error notification.
notificationsService.error("Document Failed", "booooh");

// To display a custom notification, with sticky.
notificationsService.add({ headline: 'Custom notification', message: 'My custom notification message', type: 'info', sticky: true });`;

            vm.showNotification = showNotification;
            vm.snippetAlert = snippetAlert;
        };

        function showNotification(item) {
            notificationsService.add({
                headline: item.headline,
                message: item.message,
                type: item.type
            });
        };

        function snippetAlert(item) {
            return `<div class="${item.class}" role="alert">
    <h4>${item.headline}</h4>
    <span>${item.message}</span>
</div>`;
        };

        init();
    };

    angular.module('umbraco').controller('alertsController', alertsController);
})();