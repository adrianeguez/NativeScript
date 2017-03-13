"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    // Your TypeScript logic goes here
    function AppComponent() {
        console.dump({
            hola: 'amigos'
        });
    }
    AppComponent.prototype.onPageLoaded = function () {
        console.dump({
            hola: 'amigos'
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQU8xQyxJQUFhLFlBQVk7SUFDdkIsa0NBQWtDO0lBQ2xDO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNYLElBQUksRUFBQyxRQUFRO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELG1DQUFZLEdBQVo7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ1gsSUFBSSxFQUFDLFFBQVE7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLFlBQVk7SUFMeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7UUFDakMsU0FBUyxFQUFDLENBQUMsbUJBQW1CLENBQUM7S0FDaEMsQ0FBQzs7R0FDVyxZQUFZLENBWXhCO0FBWlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOlsnYXBwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAvLyBZb3VyIFR5cGVTY3JpcHQgbG9naWMgZ29lcyBoZXJlXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgY29uc29sZS5kdW1wKHtcbiAgICAgIGhvbGE6J2FtaWdvcydcbiAgICB9KTtcbiAgfVxuICBvblBhZ2VMb2FkZWQoKXtcbiAgICBjb25zb2xlLmR1bXAoe1xuICAgICAgaG9sYTonYW1pZ29zJ1xuICAgIH0pO1xuICB9XG59XG4iXX0=