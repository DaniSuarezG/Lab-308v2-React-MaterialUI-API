import Button from "../../components/LinkButton/LinkButton";

export function Error() {
  return (
    <div className="errorPage">
      <h1>Not Found</h1>
      <p>Something went wrong.</p>
      <Button path='/' text='Go Home'/>
    </div>
  )
}