import { OrderManager } from './ordermgr/ordermgr';
import { MenuManager } from './menumgr/menumgr';
import { EmployeeManager } from './employeemgr/employeemgr';

const orderManager = new OrderManager();
const menuManager = new MenuManager();
const employeeManager = new EmployeeManager();

menuManager.addMenuItem(1, 'Deluxe Chicken Sandwich');
menuManager.addMenuItem(2, 'Grilled Chicken Sandwich');
menuManager.addMenuItem(3, 'Grilled Chicken Nuggets');
console.log(menuManager.logMenu());
