import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { ApiResponse, Item } from "../interfaces/apiResponse";
import { ApiResponseSearch } from "../interfaces/apiResponseSearch";

@Injectable({
  providedIn: "root",
})
export class VhapService {
  baseUrl: string = environment.apiUrl;
  baseUrlSearch: string = environment.apiUrlSearch;
  result: Item[] = [];
  resultSearch: string[] =[];
  totalCount: number = 0;
  itemsPerPage: number = 0;

  constructor(private http: HttpClient) {}

  searchItems(query: string, page: number=0, size: number=6) {
    let auth_token = environment.apiKey;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth_token}`,
    });

    const params = new HttpParams()
                  .set('searchTerm', query.toString())
                  .set('startIndex', page.toString())
                  .set('count', size.toString());

     return this.http.get<ApiResponse>(this.baseUrl, { headers: headers, params: params})
     .subscribe(resp => {
        this.result = resp.Items;
        this.totalCount = resp.TotalCount;
        this.itemsPerPage = resp.ResultCount;
     });
  }

  searchInput(query: string, size: number=6) {
    let auth_token = environment.apiKey;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth_token}`,
    });

    const params = new HttpParams()
                  .set('searchTerm', query.toString())
                  .set('count', size.toString());

     return this.http.get<ApiResponseSearch>(this.baseUrlSearch, { headers: headers, params: params})
     .subscribe(resp => {
        this.resultSearch = resp.Items;
        this.totalCount = resp.TotalCount;
        this.itemsPerPage = resp.ResultCount;
     });
  }
}
