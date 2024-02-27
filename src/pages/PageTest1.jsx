import { PageElement } from "../App"

export default function PageTest1({ handlePageChange, animation }) {
    return (
        <PageElement animation={animation}>
            <h1>Page test 1</h1>
            <button onClick={() => handlePageChange("Home")}>Home</button>
            <button onClick={() => handlePageChange("PageTest2")}>PageTest2</button>
        </PageElement>
    )
}
