interface RoutesProps {
  component: () => JSX.Element | null;
  sidebar: () => JSX.Element | null;
  path: string;
}

const routes: RoutesProps[] = [
  {
    path: "/",
    component: () =>  null,
    sidebar: () =>  null,
  },
];

export default routes;