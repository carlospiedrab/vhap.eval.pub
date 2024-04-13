import { AfterViewInit, Component, OnInit } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MaterialModule,RouterLink,RouterLinkActive],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit{

  ngOnInit(): void {
    const ele = document.getElementsByTagName("BUTTON")[0] as HTMLElement;
      if (ele) {
        ele.focus();
        return;
      }
  }

  color = "white";

}
