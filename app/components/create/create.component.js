"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var CreateComponent = (function () {
    function CreateComponent(route) {
        this.route = route;
        this.numb = 1;
    }
    CreateComponent.prototype.onTap = function () {
        this.numb++;
    };
    CreateComponent.prototype.list = function () {
        this.route.navigate(["list"]);
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: "create",
            templateUrl: "./components/create/create.component.html",
            styleUrls: ['./components/create/create.css']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQXdDO0FBU3hDO0lBSUkseUJBQW9CLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBRjFCLFNBQUksR0FBVSxDQUFDLENBQUE7SUFJdEIsQ0FBQztJQUVELCtCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDZixDQUFDO0lBRUQsOEJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBZFEsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLFFBQVE7WUFDakIsV0FBVyxFQUFDLDJDQUEyQztZQUN2RCxTQUFTLEVBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUMvQyxDQUFDO3lDQU02QixlQUFNO09BSnhCLGVBQWUsQ0FlM0I7SUFBRCxzQkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjpcImNyZWF0ZVwiLFxuICAgIHRlbXBsYXRlVXJsOlwiLi9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6WycuL2NvbXBvbmVudHMvY3JlYXRlL2NyZWF0ZS5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIENyZWF0ZUNvbXBvbmVudHtcblxuICAgIHB1YmxpYyBudW1iOm51bWJlciA9IDFcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IFJvdXRlcil7XG5cbiAgICB9XG5cbiAgICBvblRhcCgpe1xuICAgICAgICB0aGlzLm51bWIrK1xuICAgIH1cblxuICAgIGxpc3QoKXtcbiAgICAgICAgdGhpcy5yb3V0ZS5uYXZpZ2F0ZShbXCJsaXN0XCJdKVxuICAgIH1cbn0iXX0=