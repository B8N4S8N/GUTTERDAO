import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x2a111A193984102e56119c1BeB7d1726BD87c2e7", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "GutterGang Membership card",
        description: "This NFT will give you access to the GutterGang!",
        image: readFileSync("/workspaces/GUTTERDAO/scripts/assets/Neon_Vice_City_Intro_free_outx2_AdobeExpress.mp4"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();