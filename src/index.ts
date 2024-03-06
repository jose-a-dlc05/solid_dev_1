class ChickFilARestaurant {
	private menuItems: string[] = [];
	private orders: { customerName: string; items: string[] }[] = [];
	private employees: { name: string; position: string }[] = [];

	constructor() {}

	public addMenuItem(item: string): void {
		this.menuItems.push(item);
	}

	public removeMenuItem(item: string): void {
		this.menuItems = this.menuItems.filter((menuItem) => menuItem !== item);
	}

	public logMenu(): string[] {
		return this.menuItems;
	}

	public placeOrder(customerName: string, items: string[]): void {
		this.orders.push({ customerName, items });
	}

	public completeOrder(customerName: string): void {
		this.orders = this.orders.filter(
			(order) => order.customerName !== customerName
		);
	}

	public logOrder(): { customerName: string; items: string[] }[] {
		return this.orders;
	}

	public hireEmployee(name: string, position: string): void {
		this.employees.push({ name, position });
	}

	public fireEmployee(name: string): void {
		this.employees = this.employees.filter(
			(employee) => employee.name !== name
		);
	}
	public logEmployees(): { name: string; position: string }[] {
		return this.employees;
	}
}

const chickFilARestaurantHandler = new ChickFilARestaurant();
chickFilARestaurantHandler.addMenuItem('Deluxe Chicken Sandwich');
console.log(chickFilARestaurantHandler.logMenu());
