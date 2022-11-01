const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = TRIVIAL_PARTITION_KEY;
 
  if (event) {
    if (event.partitionKey) {
      candidate = crypto.createHash("sha3-512").update(JSON.stringify(event.partitionKey)).digest("hex");
    } else {
      candidate = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
      
    }
  }
  return candidate;
};
