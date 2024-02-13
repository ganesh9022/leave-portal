import React from 'react';
import { Grid, Flex, Text, Card } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      {/* <Card> */}
      <Grid align="center" columns="1" gap="5" style={{ maxWidth: 240, margin: 20 }}>
        <Flex direction="column">
          <Text size="6" weight="bold">
            <h1>Dashboard</h1>
          </Text>
        </Flex>
        <Grid align="center" columns="1" gap="5" p="3">
            <Flex direction="column">
              <Text size="4" weight="bold">
                <h1>Dashboard</h1>
              </Text>
            </Flex>

            <Flex direction="column">
              <Text size="4" weight="bold">
                <h1>Apply Leave</h1>
              </Text>
            </Flex>

            <Flex direction="column">
              <Text size="4" weight="bold">
                <h1>Payslipsssssss</h1>
              </Text>
            </Flex>
          

            <Flex direction="column">
              <Text size="4" weight="bold">
                <h1>Setting</h1>
              </Text>
            </Flex>
        </Grid>

        <Grid align="center" columns="1" gap="5" p="3">
            <Flex direction="column">
              <Text size="4" weight="bold">
                <h1>Notification</h1>
              </Text>
            </Flex>

            <Flex direction="column">
              <Text size="4" weight="bold">
                <h1>My Profile</h1>
              </Text>
            </Flex>

            <Flex direction="column">
              <Text size="4" weight="bold">
                <h1>Logout</h1>
              </Text>
            </Flex>
        </Grid>

        <Grid align="center" columns="1" gap="5" p="3">
            <Flex direction="column">
              <Text size="4" weight="bold">
                <h1>Help & Support</h1>
              </Text>
            </Flex>
        </Grid>
      </Grid>
      {/* </Card> */}
    
    </div>
  );
};

export default Sidebar;
