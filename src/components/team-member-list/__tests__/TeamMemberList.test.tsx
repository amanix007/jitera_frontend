import React from "react"
import { render, screen, within } from "@testing-library/react"
import TeamMemberList from "../TeamMemberList";
describe("TeamMemberList", () => {


  it("should render initial list of 4 Dummy Member", () => {
    render(<TeamMemberList />)
    const list = screen.getByTestId("team_member_list");
    // console.log('list:', list)
    expect(list.children.length).toBe(4);

  })
});