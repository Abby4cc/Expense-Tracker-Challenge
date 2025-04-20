import React from "react";
import BotCard from "./BotCard";
import { Row, Col } from "react-bootstrap";

function BotCollection({ bots, onAdd }) {
  return (
    <div className="mt-4">
      <h2 className="text-center">Bot Collection</h2>
      <Row>
        {bots.map((bot) => (
          <Col key={bot.id} sm={12} md={6} lg={4}>
            <BotCard bot={bot} onClick={() => onAdd(bot)} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BotCollection;
