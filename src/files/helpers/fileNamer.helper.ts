export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: (error: Error | null, acceptFile: boolean) => void,
) => {
  if (!file) return callback(new Error(`Files is empty`), false);

  const fileExtension = file.mimetype.split('/')[1];
  const validExtensions = ['png', 'jpeg', 'jpg', 'gif'];

  if (validExtensions.includes(fileExtension)) return callback(null, true);

  if (fileExtension !== '') callback(null, false);
};
