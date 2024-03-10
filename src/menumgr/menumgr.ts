export interface MenuManagerInt {
	id: number;
	itemName: string;
}

export class MenuManager {
	private menuItems: MenuManagerInt[] = [];

	public addMenuItem(id: number, itemName: string): void {
		this.menuItems.push({ id, itemName });
	}

	public removeMenuItem(id: number): void {
		this.menuItems = this.menuItems.filter((menuItem) => menuItem.id !== id);
	}

	public logMenu(): MenuManagerInt[] {
		return this.menuItems;
	}
}
