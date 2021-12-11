import React, { ReactElement } from 'react'
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, DeleteOutlined, EllipsisOutlined, HeartOutlined, SettingOutlined, MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import { TeamMemberInterface } from './App';

interface Props {
    loading: boolean;
    member: null | TeamMemberInterface;
}

export default function TeamMember({ loading, member }: Props): ReactElement {

    return (
        <div className="TeamMember" data-testid="TeamMember">

            <Card

                cover={
                    <img src={`https://avatars.dicebear.com/v2/avataaars/${member?.username}.svg?options[mood][]=happy`} alt="" />}
                actions={[
                    <HeartOutlined
                        style={{ color: 'red' }}
                        key="heart" />,
                    <EditOutlined key="edit" />,
                    <DeleteOutlined key="del" />
                ]}
            >
                <Skeleton loading={loading} avatar active>

                    <h3>{member?.name}</h3>
                    <ul className="details">
                        <li><MailOutlined /> {member?.email}</li>
                        <li><PhoneOutlined /> {member?.phone}</li>
                        <li><GlobalOutlined />{member?.website}</li>
                    </ul>


                </Skeleton>
            </Card>
        </div>
    )
}
