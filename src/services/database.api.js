import { Query } from "appwrite";
import { database } from "./appwrite.config";

const ImagesCollectionID = "images";

export const fetchAllImages = () => {
  return database.listDocuments(ImagesCollectionID);
};

export const fetchImagesByUser = (id) => {
  return database.listDocuments(ImagesCollectionID, [Query.equal("user_id", id)]);
};

export const createImage = (title, url, user_id) => {
  return database.createDocument(
    ImagesCollectionID,
    "unique()",
    {
      title,
      url,
      user_id,
    },
    ["role:all"],
    [`user:${user_id}`]
  );
};

export const deleteImage = (id) => {
  return database.deleteDocument(ImagesCollectionID, id);
};
