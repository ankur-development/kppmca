import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

export async function uploadToS3(file: Buffer, fileName: string, contentType: string) {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: `blog-images/${Date.now()}-${fileName}`,
    Body: file,
    ContentType: contentType,
  }

  try {
    const command = new PutObjectCommand(params)
    await s3Client.send(command)
    return `https://${params.Bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${params.Key}`
  } catch (error) {
    console.error("Error uploading to S3:", error)
    throw new Error("Failed to upload image")
  }
}

export async function getSignedUploadUrl(fileName: string, contentType: string) {
  const key = `blog-images/${Date.now()}-${fileName}`

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: key,
    ContentType: contentType,
  })

  try {
    const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 })
    return {
      signedUrl,
      imageUrl: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`,
    }
  } catch (error) {
    console.error("Error generating signed URL:", error)
    throw new Error("Failed to generate upload URL")
  }
}
