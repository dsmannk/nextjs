import {Header} from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
    return (
        <div>
            <div style={{ paddingTop: 20}}>
                <div style={{ flex: "100px 0 0" }}>
                    <img
                        src="/images/angma.png"
                        alt="logo"
                        style={{ display: "block", width: 80 }}
                    />
                    <Header as="h1">케이블가이</Header>
                    <Gnb />
                </div>
            </div>
        </div>
    );
}