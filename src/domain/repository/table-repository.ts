import { PaginatedData } from "@domain/model/paginated-data";
import { Table } from "@domain/model/table";

export interface TableREpository {
  get(params: {
    q: string;
    page: number;
    limit: number;
  }): Promise<PaginatedData<Table>>;
  show(id: string): Promise<Table>;
  store(props: Table): Promise<Table>;
  update(id: string, props: Table): Promise<boolean>;
}
