const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = TRIVIAL_PARTITION_KEY;
  let checkhash=false;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      candidate = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
      checkhash=true;
    }
  }

  if (candidate) {
    if (typeof candidate !== "string" ) {
      candidate = JSON.stringify(candidate);
    }
    if (candidate.length > MAX_PARTITION_KEY_LENGTH  || checkhash) {
      candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
    }
  } 
  
  return candidate;
};