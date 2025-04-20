import React from "react";
import { Button, Card } from "react-bootstrap";

function BotCard({ bot, onClick, onDelete }) {

  const binary1 = bot.binary1 || bot.catchphrase?.substring(0, 20) || "";
  const binary2 = bot.binary2 || bot.catchphrase?.substring(20, 40) || "";

  return (
    <Card 
      className="m-2 shadow" 
      style={{ 
        width: "13rem", 
        cursor: "pointer", 
        backgroundColor: "#f3f3f3",
        borderRadius: "6px",
        border: "none"
      }} 
      onClick={onClick}
    >
      <Card.Img 
        variant="top" 
        src={bot.avatar_url} 
        style={{ 
          padding: "10px",
          backgroundColor: "#f3f3f3"
        }} 
      />
      <Card.Body style={{ paddingTop: "0.5rem", paddingBottom: "0.75rem" }}>
      <Card.Title style={{ marginBottom: "0.5rem" }}>
          {bot.name}
          {bot.bot_class && <span className="text-muted"> ({bot.bot_class})</span>}
        </Card.Title>
        
        <div style={{ 
          color: "#333", 
          fontSize: "0.9rem", 
          marginBottom: "0.25rem",
          fontFamily: "Times New Roman"
        }}>
          {binary1}
        </div>
        
        <div style={{ 
          color: "#333", 
          fontSize: "0.9rem", 
          marginBottom: "0.75rem",
          fontFamily: "Times New Roman"
        }}>
          {binary2}
        </div>
        
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between", 
          color: "#555", 
          fontSize: "0.8rem" 
        }}>
          <span className="me-3 text-dark">❤️ {bot.health}</span>
          <span className="me-3 text-dark">⚡ {bot.damage}</span>
          <span className="text-dark">🛡️ {bot.armor}</span>
        </div>
        
        {onDelete && (
          <Button
            variant="danger"
            size="sm"
            className="mt-2 position-absolute top-0 end-0 m-1"
            style={{ borderRadius: "50%", width: "25px", height: "25px", padding: "0px" }}
            onClick={(e) => {
              e.stopPropagation();
              onDelete(bot);
            }}
          >
            X
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default BotCard;