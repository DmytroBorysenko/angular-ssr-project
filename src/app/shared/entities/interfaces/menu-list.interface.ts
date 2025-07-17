export interface IMenuList {
  name: string;
  path: string;
  isOpen?: boolean;
  children?: IMenuList[];
  icon?: string;
  desc?: string;
}
