export interface IMenuList {
  name: string;
  path: string;
  isOpen?: boolean;
  children?: {
    name: string;
    path: string;
    icon: string;
    desc: string;
  }[];
}
