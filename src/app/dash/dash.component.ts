import { Component, OnInit, ViewChild } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { VhapService } from "../services/vhap.service";
import { CommonModule } from "@angular/common";
import { MatPaginator, PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-dash",
  standalone: true,
  imports: [MaterialModule, FormsModule, HttpClientModule, CommonModule],
  templateUrl: "./dash.component.html",
  styleUrl: "./dash.component.scss",
  providers: [VhapService],
})
export class DashComponent {
  value: string = "";
  displayedColumns: string[] = ["IntCode", "TapeLabel"];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private vhapService: VhapService) {}

  inputValue(term: string) {
    this.vhapService.searchInput(this.value);
  }

  search() {
    this.vhapService.searchItems(this.value);
  }

  get resultItems() {
    return this.vhapService.result;
  }

  get totalItems() {
    return this.vhapService.totalCount;
  }

  get itemsPerPage() {
    return this.vhapService.itemsPerPage;
  }

  onPaginator(event: PageEvent) {
    let page = event.pageIndex;
    let size = event.pageSize;
    page++;
    this.vhapService.searchItems(this.value, page, size);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.vhapService.searchItems(filterValue);
  }
}
