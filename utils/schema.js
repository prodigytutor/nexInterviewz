import { pgTable, serial, text, integer, varchar, timestamp, uniqueIndex, foreignKey, jsonb, index, boolean, pgEnum } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const invitationStatus = pgEnum("InvitationStatus", ['PENDING', 'ACCEPTED', 'DECLINED'])



export const example = pgTable("Example", {
	id: serial().primaryKey().notNull(),
	name: text(),
	description: text(),
	domainCount: integer(),
	url: text(),
	image: text(),
	imageBlurhash: text(),
});

export const prismaMigrations = pgTable("_prisma_migrations", {
	id: varchar({ length: 36 }).primaryKey().notNull(),
	checksum: varchar({ length: 64 }).notNull(),
	finishedAt: timestamp("finished_at", { withTimezone: true, mode: 'string' }),
	migrationName: varchar("migration_name", { length: 255 }).notNull(),
	logs: text(),
	rolledBackAt: timestamp("rolled_back_at", { withTimezone: true, mode: 'string' }),
	startedAt: timestamp("started_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	appliedStepsCount: integer("applied_steps_count").default(0).notNull(),
});

export const user = pgTable("User", {
	id: text().primaryKey().notNull(),
	name: text(),
	username: text(),
	ghUsername: text("gh_username"),
	email: text(),
	emailVerified: timestamp({ precision: 3, mode: 'string' }),
	image: text(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
},
(table) => {
	return {
		emailKey: uniqueIndex("User_email_key").using("btree", table.email.asc().nullsLast()),
	}
});

export const corporateClient = pgTable("CorporateClient", {
	id: text().primaryKey().notNull(),
	name: text().notNull(),
	userId: text().notNull(),
	email: text().notNull(),
	password: text().notNull(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
},
(table) => {
	return {
		emailKey: uniqueIndex("CorporateClient_email_key").using("btree", table.email.asc().nullsLast()),
		userIdKey: uniqueIndex("CorporateClient_userId_key").using("btree", table.userId.asc().nullsLast()),
		corporateClientUserIdFkey: foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "CorporateClient_userId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	}
});

export const mockInterview = pgTable("MockInterview", {
	id: text().primaryKey().notNull(),
	userId: text(),
	role: text().notNull(),
	topic: text().notNull(),
	experience: integer().default(5),
	questions: jsonb(),
	results: jsonb(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
},
(table) => {
	return {
		mockInterviewUserIdFkey: foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "MockInterview_userId_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	}
});

export const site = pgTable("Site", {
	id: text().primaryKey().notNull(),
	name: text(),
	description: text(),
	logo: text().default('https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/JRajRyC-PhBHEinQkupt02jqfKacBVHLWJq7Iy.png'),
	font: text().default('font-cal').notNull(),
	image: text().default('https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/hxfcV5V-eInX3jbVUhjAt1suB7zB88uGd1j20b.png'),
	imageBlurhash: text().default('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAhCAYAAACbffiEAAAACXBIWXMAABYlAAAWJQFJUiTwAAABfUlEQVR4nN3XyZLDIAwE0Pz/v3q3r55JDlSBplsIEI49h76k4opexCK/juP4eXjOT149f2Tf9ySPgcjCc7kdpBTgDPKByKK2bTPFEdMO0RDrusJ0wLRBGCIuelmWJAjkgPGDSIQEMBDCfA2CEPM80+Qwl0JkNxBimiaYGOTUlXYI60YoehzHJDEm7kxjV3whOQTD3AaCuhGKHoYhyb+CBMwjIAFz647kTqyapdV4enGINuDJMSScPmijSwjCaHeLcT77C7EC0C1ugaCTi2HYfAZANgj6Z9A8xY5eiYghDMNQBJNCWhASot0jGsSCUiHWZcSGQjaWWCDaGMOWnsCcn2QhVkRuxqqNxMSdUSElCDbp1hbNOsa6Ugxh7xXauF4DyM1m5BLtCylBXgaxvPXVwEoOBjeIFVODtW74oj1yBQah3E8tyz3SkpolKS9Geo9YMD1QJR1Go4oJkgO1pgbNZq0AOUPChyjvh7vlXaQa+X1UXwKxgHokB2XPxbX+AnijwIU4ahazAAAAAElFTkSuQmCC'),
	subdomain: text(),
	customDomain: text(),
	message404: text().default('Blimey! You have found a page that doesnt exist.'),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
	userId: text(),
},
(table) => {
	return {
		customDomainKey: uniqueIndex("Site_customDomain_key").using("btree", table.customDomain.asc().nullsLast()),
		subdomainKey: uniqueIndex("Site_subdomain_key").using("btree", table.subdomain.asc().nullsLast()),
		userIdIdx: index("Site_userId_idx").using("btree", table.userId.asc().nullsLast()),
		siteUserIdFkey: foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "Site_userId_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	}
});

export const invitation = pgTable("Invitation", {
	id: text().primaryKey().notNull(),
	email: text().notNull(),
	invitationCode: text().notNull(),
	status: invitationStatus().default('PENDING').notNull(),
	userId: text(),
	siteId: text().notNull(),
	corporateClientId: text(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
},
(table) => {
	return {
		invitationCodeKey: uniqueIndex("Invitation_invitationCode_key").using("btree", table.invitationCode.asc().nullsLast()),
		invitationUserIdFkey: foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "Invitation_userId_fkey"
		}).onUpdate("cascade").onDelete("set null"),
		invitationSiteIdFkey: foreignKey({
			columns: [table.siteId],
			foreignColumns: [site.id],
			name: "Invitation_siteId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
		invitationCorporateClientIdFkey: foreignKey({
			columns: [table.corporateClientId],
			foreignColumns: [corporateClient.id],
			name: "Invitation_corporateClientId_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	}
});

export const account = pgTable("Account", {
	id: text().primaryKey().notNull(),
	userId: text().notNull(),
	type: text().notNull(),
	provider: text().notNull(),
	providerAccountId: text().notNull(),
	refreshToken: text("refresh_token"),
	refreshTokenExpiresIn: integer("refresh_token_expires_in"),
	accessToken: text("access_token"),
	expiresAt: integer("expires_at"),
	tokenType: text("token_type"),
	scope: text(),
	idToken: text("id_token"),
	sessionState: text("session_state"),
	oauthTokenSecret: text("oauth_token_secret"),
	oauthToken: text("oauth_token"),
},
(table) => {
	return {
		providerProviderAccountIdKey: uniqueIndex("Account_provider_providerAccountId_key").using("btree", table.provider.asc().nullsLast(), table.providerAccountId.asc().nullsLast()),
		userIdIdx: index("Account_userId_idx").using("btree", table.userId.asc().nullsLast()),
		accountUserIdFkey: foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "Account_userId_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	}
});

export const session = pgTable("Session", {
	id: text().primaryKey().notNull(),
	sessionToken: text().notNull(),
	userId: text().notNull(),
	expires: timestamp({ precision: 3, mode: 'string' }).notNull(),
},
(table) => {
	return {
		sessionTokenKey: uniqueIndex("Session_sessionToken_key").using("btree", table.sessionToken.asc().nullsLast()),
		userIdIdx: index("Session_userId_idx").using("btree", table.userId.asc().nullsLast()),
		sessionUserIdFkey: foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "Session_userId_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	}
});

export const post = pgTable("Post", {
	id: text().primaryKey().notNull(),
	title: text(),
	description: text(),
	content: text(),
	slug: text().notNull(),
	image: text().default('https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/hxfcV5V-eInX3jbVUhjAt1suB7zB88uGd1j20b.png'),
	imageBlurhash: text().default('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAhCAYAAACbffiEAAAACXBIWXMAABYlAAAWJQFJUiTwAAABfUlEQVR4nN3XyZLDIAwE0Pz/v3q3r55JDlSBplsIEI49h76k4opexCK/juP4eXjOT149f2Tf9ySPgcjCc7kdpBTgDPKByKK2bTPFEdMO0RDrusJ0wLRBGCIuelmWJAjkgPGDSIQEMBDCfA2CEPM80+Qwl0JkNxBimiaYGOTUlXYI60YoehzHJDEm7kxjV3whOQTD3AaCuhGKHoYhyb+CBMwjIAFz647kTqyapdV4enGINuDJMSScPmijSwjCaHeLcT77C7EC0C1ugaCTi2HYfAZANgj6Z9A8xY5eiYghDMNQBJNCWhASot0jGsSCUiHWZcSGQjaWWCDaGMOWnsCcn2QhVkRuxqqNxMSdUSElCDbp1hbNOsa6Ugxh7xXauF4DyM1m5BLtCylBXgaxvPXVwEoOBjeIFVODtW74oj1yBQah3E8tyz3SkpolKS9Geo9YMD1QJR1Go4oJkgO1pgbNZq0AOUPChyjvh7vlXaQa+X1UXwKxgHokB2XPxbX+AnijwIU4ahazAAAAAElFTkSuQmCC'),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
	published: boolean().default(false).notNull(),
	siteId: text(),
	userId: text(),
},
(table) => {
	return {
		siteIdIdx: index("Post_siteId_idx").using("btree", table.siteId.asc().nullsLast()),
		slugSiteIdKey: uniqueIndex("Post_slug_siteId_key").using("btree", table.slug.asc().nullsLast(), table.siteId.asc().nullsLast()),
		userIdIdx: index("Post_userId_idx").using("btree", table.userId.asc().nullsLast()),
		postSiteIdFkey: foreignKey({
			columns: [table.siteId],
			foreignColumns: [site.id],
			name: "Post_siteId_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
		postUserIdFkey: foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "Post_userId_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	}
});

export const userAnswer = pgTable("UserAnswer", {
	id: text().primaryKey().notNull(),
	mockIdRef: text().notNull(),
	question: text().notNull(),
	correctAns: text().notNull(),
	userAns: text().notNull(),
	feedback: text().notNull(),
	rating: text().notNull(),
	userEmail: text().notNull(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
},
(table) => {
	return {
		userAnswerMockIdRefFkey: foreignKey({
			columns: [table.mockIdRef],
			foreignColumns: [mockInterview.id],
			name: "UserAnswer_mockIdRef_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	}
});

export const verificationToken = pgTable("VerificationToken", {
	identifier: text().notNull(),
	token: text().notNull(),
	expires: timestamp({ precision: 3, mode: 'string' }).notNull(),
},
(table) => {
	return {
		identifierTokenKey: uniqueIndex("VerificationToken_identifier_token_key").using("btree", table.identifier.asc().nullsLast(), table.token.asc().nullsLast()),
		tokenKey: uniqueIndex("VerificationToken_token_key").using("btree", table.token.asc().nullsLast()),
	}
});
