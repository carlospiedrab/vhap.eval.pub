export interface ApiResponse {
  Items: Item[];
  TotalCount: number;
  ResultCount: number;
}

export interface Item {
  IntCode: number;
  TapeLabel: string;
  ExperienceGroups: string;
  ImageURL: string;
}
