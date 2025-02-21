export const cleanup = () => {
  // Cleanup resources
  store.dispatch(clearBasket());
  
  // Close connections
  if (websocketConnection) {
    websocketConnection.close();
  }
};

process.on('SIGTERM', cleanup);
process.on('SIGINT', cleanup); 