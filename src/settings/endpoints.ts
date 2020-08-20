import { environment } from './../environments/environment.prod';

export const endpoints = {
  list: environment.api_base + "/personas",
  register: environment.api_base + "/personas/create",
  edit: environment.api_base + "/personas/edit",
  delete: environment.api_base + "/personas/delete"
};
