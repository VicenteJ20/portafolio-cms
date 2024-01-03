// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/**/**/*.md`,
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'string',
      required: true,
    },
    coverImage: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post: any) => `/proyectos/${post._raw.filePathPattern}`,
    }
  }
}))

export default makeSource({
  contentDirPath: 'proyectos',
  documentTypes: [Post]
})