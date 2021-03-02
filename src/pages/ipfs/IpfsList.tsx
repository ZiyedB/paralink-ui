import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
// TODO: Remove semantic here later on when this is tackled and use directly tailwind
import { Button, Header, Table } from 'semantic-ui-react';

interface IpfsListState {
  ipfsHashes: any[];
}

class IpfsList extends React.Component<{}, IpfsListState> {
  API_PATH = 'http://127.0.0.1:7424/api';

  constructor(props: {}) {
    super(props);
    this.state = {
      ipfsHashes: [],
    };
  }

  componentDidMount(): void {
    fetch(`${this.API_PATH}/ipfs`)
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({
            ipfsHashes: res.hashes,
          });
        },
        (error) => {
          this.setState({
            ipfsHashes: [],
          });
          console.log(error);
        },
      );
  }

  render(): ReactNode {
    return (
      <div className="column">
        <Link to="/ipfs/new">
          <Button primary>
            <i className="plus icon" />
            New PQL definition
          </Button>
        </Link>

        <Header as="h1">List of local IPFS hashes</Header>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>IPFS hash</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.ipfsHashes.map((hash) => (
              <Table.Row>
                <Table.Cell>
                  <Link to={`/ipfs/${hash}`}>{hash}</Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default IpfsList;
