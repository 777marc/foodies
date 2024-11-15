import styleClasses from "../components/loading.module.css";

export default function loading() {
  return <p className={styleClasses.loading}>Fetching Meals...</p>;
}
