import React, { ReactElement, useState } from 'react'

import TeamMember from './TeamMember';
import 'antd/dist/antd.css';
import './App.scss'
import { get_users } from './api/api_requests';
export interface TeamMemberInterface {
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
  key: number,
  loading: boolean,


}

interface Istate {
  loading: boolean,
  teamMembers: Array<TeamMemberInterface>
}

function App() {

  const [state, setstate] = React.useState<Istate>({
    loading: true,
    teamMembers: []
  })

  React.useEffect(() => {
    (async () => {
      setstate({ ...state, loading: true });

      let data = await get_users();
      if (data) {
        setstate({ ...state, loading: false, teamMembers: data });
      }
      console.log('data:', data)
    })();

    return () => {
      // cleanup
    }
  }, [])

  let { loading, teamMembers } = state;


  return (
    <div className="App">
      <div className="TeamMember-list" data-testid="team_member_list">

        {loading ? Array.from(Array(4).keys()).map((i) =>
          <TeamMember key={i} loading={loading} member={null} />)
          :
          teamMembers.map((member) => <TeamMember key={member.username} member={member} loading={false} />)
        }
      </div>
    </div>
  )
}

export default App
