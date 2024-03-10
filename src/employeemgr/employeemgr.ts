interface EmployeeManagerInt {
	id: number;
	name: string;
	position: string;
}

export class EmployeeManager {
	private employees: EmployeeManagerInt[] = [];

	public hireEmployee(id: number, name: string, position: string): void {
		this.employees.push({ id, name, position });
	}

	public fireEmployee(id: number): void {
		this.employees = this.employees.filter((employee) => employee.id !== id);
	}

	public logEmployees(): EmployeeManagerInt[] {
		return this.employees;
	}
}
