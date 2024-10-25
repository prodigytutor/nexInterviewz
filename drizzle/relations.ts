import { relations } from "drizzle-orm/relations";
import { user, corporateClient, mockInterview, site, invitation, account, session, post, userAnswer } from "./schema";

export const corporateClientRelations = relations(corporateClient, ({one, many}) => ({
	user: one(user, {
		fields: [corporateClient.userId],
		references: [user.id]
	}),
	invitations: many(invitation),
}));

export const userRelations = relations(user, ({many}) => ({
	corporateClients: many(corporateClient),
	mockInterviews: many(mockInterview),
	sites: many(site),
	invitations: many(invitation),
	accounts: many(account),
	sessions: many(session),
	posts: many(post),
}));

export const mockInterviewRelations = relations(mockInterview, ({one, many}) => ({
	user: one(user, {
		fields: [mockInterview.userId],
		references: [user.id]
	}),
	userAnswers: many(userAnswer),
}));

export const siteRelations = relations(site, ({one, many}) => ({
	mockInterviews: many(mockInterview),
	user: one(user, {
		fields: [site.userId],
		references: [user.id]
	}),
	invitations: many(invitation),
	posts: many(post),
}));

export const invitationRelations = relations(invitation, ({one}) => ({
	user: one(user, {
		fields: [invitation.userId],
		references: [user.id]
	}),
	site: one(site, {
		fields: [invitation.siteId],
		references: [site.id]
	}),
	corporateClient: one(corporateClient, {
		fields: [invitation.corporateClientId],
		references: [corporateClient.id]
	}),
}));

export const accountRelations = relations(account, ({one}) => ({
	user: one(user, {
		fields: [account.userId],
		references: [user.id]
	}),
}));

export const sessionRelations = relations(session, ({one}) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id]
	}),
}));

export const postRelations = relations(post, ({one}) => ({
	site: one(site, {
		fields: [post.siteId],
		references: [site.id]
	}),
	user: one(user, {
		fields: [post.userId],
		references: [user.id]
	}),
}));

export const userAnswerRelations = relations(userAnswer, ({one}) => ({
	mockInterview: one(mockInterview, {
		fields: [userAnswer.mockIdRef],
		references: [mockInterview.id]
	}),
}));