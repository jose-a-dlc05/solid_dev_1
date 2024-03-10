import { MenuManagerInt } from '../menumgr/menumgr';

interface OrderManagerInt {
	id: number;
	customerName: string;
	items: MenuManagerInt[];
}

export class OrderManager {
	private orders: OrderManagerInt[] = [];

	public placeOrder(
		id: number,
		customerName: string,
		items: MenuManagerInt[]
	): void {
		this.orders.push({ id, customerName, items });
		console.log('Order was placed');
	}

	public completeOrder(customerName: string): void {
		this.orders = this.orders.filter(
			(order) => order.customerName !== customerName
		);
		console.log('Order was completed');
	}

	public voidOrder(id: number): void {
		this.orders = this.orders.filter((order) => order.id !== id);
		console.log('Order was voided');
	}

	public logOrder(id: number): OrderManagerInt[] {
		return this.orders.filter((order) => order.id === id);
	}

	public logOrders(): OrderManagerInt[] {
		return this.orders;
	}
}
