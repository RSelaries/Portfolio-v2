import { PageElement } from "../App"

export default function PageTest2({ handlePageChange, animation }) {
    return (
        <PageElement animation={animation}>
            <h1>Page test 2</h1>
            <button onClick={() => handlePageChange("Home")}>Home</button>
            <button onClick={() => handlePageChange("PageTest1")}>PageTest1</button>
        </PageElement>
    )
}
