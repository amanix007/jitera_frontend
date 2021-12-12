import React, { ReactElement } from 'react'
import { get_users } from '../../api/api_requests';
import { TeamMemberInterface } from '../../helpers/Interfaces';


import TeamMember from './TeamMember';

interface Props {

}

interface Istate {
    loading: boolean,
    teamMembers: Array<TeamMemberInterface>
}

export default function TeamMemberList({ }: Props): ReactElement {
    const [state, setstate] = React.useState<Istate>({
        loading: true,
        teamMembers: []
    });

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
        <ul className="TeamMember-list" data-testid="team_member_list" role="list">

            {loading ? Array.from(Array(4).keys()).map((i) =>
                <TeamMember key={i} loading={loading} member={null} />)
                :
                teamMembers.map((member) => <TeamMember key={member.username} member={member} loading={false} />)
            }
        </ul>
    )
}
